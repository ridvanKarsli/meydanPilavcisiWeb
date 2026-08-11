import useInView from "../hooks/useInView";

const VARIANT_CLASS = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

// Scroll ile ekrana giren öğeleri yumuşakça belirginleştirir.
// Sadece opacity/transform kullanır; sürekli çalışan bir animasyon
// olmadığı için performans maliyeti neredeyse sıfırdır.
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  ...rest
}) {
  const [ref, inView] = useInView({ threshold: 0.12 });
  const base = VARIANT_CLASS[variant] || "reveal";

  return (
    <Tag
      ref={ref}
      className={`${base} ${inView ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
