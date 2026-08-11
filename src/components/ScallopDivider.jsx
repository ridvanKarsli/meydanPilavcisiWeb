// Logo çerçevesindeki dalgalı/tırtıklı kenarı andıran, iki bölüm
// arasına şeker gibi bir geçiş katan statik (animasyonsuz) ayırıcı.
export default function ScallopDivider({ color = "#fbf5ea", flip = false, className = "" }) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none ${flip ? "-scale-y-100" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 600 20" preserveAspectRatio="none" className="block w-full h-5 sm:h-6">
        <path
          d="M0 20V7c6-7 13-7 19 0 6 7 13 7 19 0 6-7 13-7 19 0 6 7 13 7 19 0 6-7 13-7 19 0 6 7 13 7 19 0 6-7 13-7 19 0 6 7 13 7 19 0 6-7 13-7 19 0 6 7 13 7 19 0 6-7 13-7 19 0 6 7 13 7 19 0 6-7 13-7 19 0 6 7 13 7 19 0 6-7 13-7 19 0 6 7 13 7 19 0 6-7 13-7 19 0 6 7 13 7 19 0 6-7 13-7 19 0 6 7 13 7 19 0 6-7 13-7 19 0 6 7 13 7 19 0 6-7 13-7 19 0 6 7 13 7 19 0 6-7 13-7 19 0 6 7 13 7 19 0V20Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
