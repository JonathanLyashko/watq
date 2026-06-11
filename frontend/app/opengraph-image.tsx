import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function toDataUrl(buffer: Buffer) {
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const logoPath = path.join(
    process.cwd(),
    "public",
    "WATQ_logo_full_name_Color_pink_red.png",
  );
  const logo = await readFile(logoPath);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #f7f8fd 0%, #f3f1ff 55%, #fdf2f8 100%)",
          color: "#0b1020",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(109, 40, 217, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(109, 40, 217, 0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-40px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(185, 28, 123, 0.14)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-160px",
            left: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(109, 40, 217, 0.14)",
            filter: "blur(40px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "72px 76px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              maxWidth: "760px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#54627d",
                fontWeight: 700,
              }}
            >
              Student-Led Design Team
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 78,
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                }}
              >
                Quantum design work,
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 78,
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  color: "#7e22ce",
                }}
              >
                made approachable.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "680px",
                fontSize: 32,
                lineHeight: 1.4,
                color: "#50607c",
              }}
            >
              WatQ is a quantum design team based in Waterloo, exploring
              hardware, software, and experimental systems.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "22px",
                  height: "22px",
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #db2777, #7c3aed)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontSize: 28,
                  color: "#64748b",
                }}
              >
                watq.vercel.app
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px 30px",
                borderRadius: "30px",
                border: "1px solid rgba(124, 58, 237, 0.14)",
                background: "rgba(255, 255, 255, 0.78)",
                boxShadow: "0 20px 50px rgba(53, 59, 92, 0.12)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={toDataUrl(logo)}
                alt="WatQ"
                width={420}
                height={96}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
