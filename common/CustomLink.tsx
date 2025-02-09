import Link from "next/link";

export default function CustomLink({
  children,
  ...props
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link {...props}>
      <a className="text-white">{children}</a>
    </Link>
  );
}
