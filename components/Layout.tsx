import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-primary h-screen">
      <Header />
      <main className="max-w-screen-xl mx-auto">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
