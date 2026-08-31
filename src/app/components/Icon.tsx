type IconProps = {
  src?: string;
  alt?: string;
  size?: number;
};

export default function Icon({
  src,
  alt = "Icon",
  size = 50,
}: IconProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: "#ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <span>👤</span>
      )}
    </div>
  );
}