export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-[100%] py-[100px]  flex justify-center items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      {children}
    </div>
  );
}
