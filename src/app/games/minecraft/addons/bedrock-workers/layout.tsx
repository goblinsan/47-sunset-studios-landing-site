import { AddonNav } from './_components/AddonNav';

export default function BedrockWorkersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AddonNav />
      {children}
    </>
  );
}
