const Layout = ({ children, footer }) => {
  return (
    <div className="container">
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
};
Layout.defaultProps = {
  footer: "footer default",
};
export default Layout;
