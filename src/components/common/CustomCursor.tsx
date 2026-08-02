import type { CursorPosition } from "../../types";

interface CustomCursorProps {
  cursorHover: boolean;
  cursorPos: CursorPosition;
}

export function CustomCursor({ cursorHover, cursorPos }: CustomCursorProps) {
  return (
    <>
      <div
        className={`custom-cursor ${cursorHover ? "hover" : ""}`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />
    </>
  );
}
