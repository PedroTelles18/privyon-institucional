import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ThemeMode = "dark" | "light";

export type AccentKey = "teal" | "indigo" | "violet" | "amber" | "emerald" | "rose";

export const accents: Record<
  AccentKey,
  { label: string; swatch: string; primary: string; primaryFg: string; accent: string; gradient: string; glow: string }
> = {
  teal: {
    label: "Teal institucional",
    swatch: "oklch(0.78 0.15 175)",
    primary: "oklch(0.78 0.15 175)",
    primaryFg: "oklch(0.17 0.03 180)",
    accent: "oklch(0.62 0.13 230)",
    gradient: "linear-gradient(135deg, oklch(0.82 0.14 178), oklch(0.68 0.13 210))",
    glow: "0 30px 90px -30px oklch(0.78 0.15 175 / 45%)",
  },
  indigo: {
    label: "Indigo corporativo",
    swatch: "oklch(0.62 0.18 268)",
    primary: "oklch(0.66 0.17 268)",
    primaryFg: "oklch(0.98 0.01 270)",
    accent: "oklch(0.7 0.14 230)",
    gradient: "linear-gradient(135deg, oklch(0.68 0.17 268), oklch(0.62 0.14 225))",
    glow: "0 30px 90px -30px oklch(0.66 0.17 268 / 45%)",
  },
  violet: {
    label: "Violeta",
    swatch: "oklch(0.68 0.19 305)",
    primary: "oklch(0.7 0.18 305)",
    primaryFg: "oklch(0.98 0.01 300)",
    accent: "oklch(0.68 0.15 340)",
    gradient: "linear-gradient(135deg, oklch(0.72 0.18 305), oklch(0.66 0.16 340))",
    glow: "0 30px 90px -30px oklch(0.7 0.18 305 / 45%)",
  },
  amber: {
    label: "Âmbar",
    swatch: "oklch(0.8 0.16 75)",
    primary: "oklch(0.82 0.15 78)",
    primaryFg: "oklch(0.22 0.04 70)",
    accent: "oklch(0.72 0.14 45)",
    gradient: "linear-gradient(135deg, oklch(0.85 0.15 85), oklch(0.72 0.15 45))",
    glow: "0 30px 90px -30px oklch(0.82 0.15 78 / 45%)",
  },
  emerald: {
    label: "Esmeralda",
    swatch: "oklch(0.72 0.16 155)",
    primary: "oklch(0.74 0.16 155)",
    primaryFg: "oklch(0.18 0.03 160)",
    accent: "oklch(0.68 0.13 195)",
    gradient: "linear-gradient(135deg, oklch(0.78 0.16 155), oklch(0.66 0.13 195))",
    glow: "0 30px 90px -30px oklch(0.74 0.16 155 / 45%)",
  },
  rose: {
    label: "Rosé",
    swatch: "oklch(0.68 0.19 15)",
    primary: "oklch(0.7 0.18 15)",
    primaryFg: "oklch(0.98 0.01 20)",
    accent: "oklch(0.66 0.16 340)",
    gradient: "linear-gradient(135deg, oklch(0.74 0.18 20), oklch(0.64 0.17 340))",
    glow: "0 30px 90px -30px oklch(0.7 0.18 15 / 45%)",
  },
};

export const radiusOptions = [
  { key: "sharp", label: "Reto", value: "0.35rem" },
  { key: "soft", label: "Suave", value: "0.9rem" },
  { key: "round", label: "Arredondado", value: "1.4rem" },
] as const;

export const densityOptions = [
  { key: "compact", label: "Compacta", value: "0.85" },
  { key: "cozy", label: "Confortável", value: "1" },
  { key: "spacious", label: "Espaçosa", value: "1.15" },
] as const;

export type RadiusKey = (typeof radiusOptions)[number]["key"];
export type DensityKey = (typeof densityOptions)[number]["key"];

export type ThemeState = {
  mode: ThemeMode;
  accent: AccentKey;
  radius: RadiusKey;
  density: DensityKey;
};

const defaultTheme: ThemeState = {
  mode: "dark",
  accent: "teal",
  radius: "soft",
  density: "cozy",
};

const STORAGE_KEY = "privyon-app-theme";

type ThemeContextValue = {
  theme: ThemeState;
  setTheme: (patch: Partial<ThemeState>) => void;
  resetTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: ThemeState) {
  const root = document.documentElement;
  root.dataset["theme"] = theme.mode;
  const accent = accents[theme.accent];
  root.style.setProperty("--primary", accent.primary);
  root.style.setProperty("--primary-foreground", accent.primaryFg);
  root.style.setProperty("--accent", accent.accent);
  root.style.setProperty("--ring", accent.primary);
  root.style.setProperty("--gradient-primary", accent.gradient);
  root.style.setProperty("--shadow-glow", accent.glow);
  root.style.setProperty(
    "--radius",
    radiusOptions.find((r) => r.key === theme.radius)?.value ?? "0.9rem",
  );
  root.style.setProperty(
    "--density",
    densityOptions.find((d) => d.key === theme.density)?.value ?? "1",
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeState>(defaultTheme);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<ThemeState>;
        setThemeState({ ...defaultTheme, ...parsed });
        return;
      }
    } catch {
      /* ignore corrupted preferences */
    }
    applyTheme(defaultTheme);
  }, []);

  useEffect(() => {
    applyTheme(theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const setTheme = useCallback((patch: Partial<ThemeState>) => {
    setThemeState((current) => ({ ...current, ...patch }));
  }, []);

  const resetTheme = useCallback(() => setThemeState(defaultTheme), []);

  const value = useMemo(() => ({ theme, setTheme, resetTheme }), [theme, setTheme, resetTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  return ctx;
}