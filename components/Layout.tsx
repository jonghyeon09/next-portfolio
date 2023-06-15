import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-primary">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
