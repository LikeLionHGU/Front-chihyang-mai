export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[100%] py-[50px]  flex justify-center items-center">
      {children}
    </div>
  );
}
