import { useRef, type PointerEvent, type ReactNode } from "react";
import { ShieldCheck, ClipboardCheck, ShieldAlert, ListChecks, Building2, FileText } from "lucide-react";

const preserve3d = { transformStyle: "preserve-3d" } as const;

/* ───────── Pilha de camadas com feixe de varredura ───────── */
const LAYERS = ["Diagnóstico", "Riscos", "Evidências"];
const FLAGS: Record<number, string>[] = [
  { 7: "p", 14: "a", 22: "p", 29: "d" },
  { 3: "d", 17: "a", 26: "d", 31: "a" },
  { 10: "p", 20: "p", 33: "a" },
];
const CELL: Record<string, string> = {
  p: "bg-primary animate-cell shadow-[0_0_14px_3px_color-mix(in_oklab,var(--primary)_70%,transparent)]",
  a: "bg-chart-4 animate-cell shadow-[0_0_14px_3px_color-mix(in_oklab,var(--chart-4)_60%,transparent)]",
  d: "bg-destructive animate-cell shadow-[0_0_14px_3px_color-mix(in_oklab,var(--destructive)_70%,transparent)]",
};

function Chip({ className, z, delay, children }: { className: string; z: number; delay: string; children: ReactNode }) {
  return (
    <div className={`absolute ${className}`} style={{ transform: `translateZ(${z}px)` }}>
      <div
        className="surface-card animate-floaty flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium"
        style={{ animationDelay: delay }}
      >
        {children}
      </div>
    </div>
  );
}

export function VaultScene() {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 22}deg`);
    el.style.setProperty("--rx", `${-((e.clientY - r.top) / r.height - 0.5) * 16}deg`);
  };
  const leave = () => {
    ref.current?.style.setProperty("--ry", "0deg");
    ref.current?.style.setProperty("--rx", "0deg");
  };

  return (
    <div
      onPointerMove={move}
      onPointerLeave={leave}
      className="relative h-[440px] sm:h-[520px]"
      style={{ perspective: "1500px" }}
      aria-hidden="true"
    >
      <div className="absolute top-1/2 left-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[90px]" />
      <div
        ref={ref}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ ...preserve3d, transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))" }}
      >
        <div
          className="absolute top-[54%] left-1/2 -mt-[140px] -ml-[140px] size-[280px] sm:-mt-[160px] sm:-ml-[160px] sm:size-[320px]"
          style={{ ...preserve3d, transform: "rotateX(62deg) rotateZ(-38deg) translateZ(-80px)" }}
        >
          {LAYERS.map((name, i) => (
            <div
              key={name}
              className="absolute inset-0 grid grid-cols-6 gap-2 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/20 to-accent/10 p-3 shadow-[0_0_70px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
              style={{ transform: `translateZ(${i * 84}px)` }}
            >
              {Array.from({ length: 36 }).map((_, c) => (
                <span
                  key={c}
                  className={`rounded-[5px] ${FLAGS[i][c] ? CELL[FLAGS[i][c]] : "bg-foreground/10"}`}
                  style={{ animationDelay: `${(c % 7) * 0.3}s` }}
                />
              ))}
              <span className="absolute -bottom-6 left-1 text-[10px] text-muted-foreground">{name}</span>
            </div>
          ))}
          <div className="animate-scan-z absolute -inset-2.5 rounded-3xl border-2 border-primary bg-primary/10 shadow-[0_0_50px_8px_color-mix(in_oklab,var(--primary)_55%,transparent)]" />
        </div>

        <Chip className="top-[10%] left-0" z={140} delay="0s">
          <span className="size-2 rounded-full bg-primary" /> Score de conformidade 78%
        </Chip>
        <Chip className="top-[38%] right-0" z={210} delay="1.2s">
          <span className="size-2 rounded-full bg-destructive" /> 3 riscos críticos
        </Chip>
        <Chip className="bottom-[8%] left-[8%]" z={120} delay="2.4s">
          <ShieldCheck className="size-3.5 text-primary" /> Relatório pronto para auditoria
        </Chip>
      </div>
    </div>
  );
}

/* ───────── Cubo giratório ───────── */
const FACES = [ShieldCheck, ClipboardCheck, ShieldAlert, ListChecks, Building2, FileText];
const POS = ["rotateY(0deg)", "rotateY(90deg)", "rotateY(180deg)", "rotateY(270deg)", "rotateX(90deg)", "rotateX(-90deg)"];

export function Cube3D() {
  return (
    <div className="size-[120px]" style={{ perspective: "900px" }} aria-hidden="true">
      <div className="animate-spin-3d relative size-full" style={preserve3d}>
        {FACES.map((Icon, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/50 to-accent/30 shadow-[inset_0_0_30px_color-mix(in_oklab,var(--primary)_40%,transparent)]"
            style={{ transform: `${POS[i]} translateZ(60px)`, backfaceVisibility: "hidden" }}
          >
            <Icon className="size-8 text-primary-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────── Card com tilt 3D e brilho que segue o cursor ───────── */
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 9}deg) rotateY(${(x - 0.5) * 11}deg)`;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.transform = "";
      }}
      className={`group relative transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}
