import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-solid";
import { createEffect, createSignal } from "solid-js";

export function ThemeToggle() {
  const isDarkMode =
    document.documentElement.classList.contains("dark") ||
    document.documentElement.hasAttribute("data-kb-theme");

  const [theme, setTheme] = createSignal<"light" | "dark" | "system">("light");
  setTheme(isDarkMode ? "dark" : "light");

  createEffect(() => {
    const isDark =
      theme() === "dark" ||
      (theme() === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    document.documentElement.setAttribute(
      "data-kb-theme",
      isDark ? "dark" : "light",
    );
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        as={Button}
        variant="ghost"
        size="sm"
        class="w-9 px-0"
      >
        <SunIcon class="size-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon class="absolute size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => setTheme("light")}>
          <SunIcon class="mr-2 size-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setTheme("dark")}>
          <MoonIcon class="mr-2 size-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setTheme("system")}>
          <LaptopIcon class="mr-2 size-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
