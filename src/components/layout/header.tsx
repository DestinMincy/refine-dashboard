import React from "react";
import CurrentUser from "./current-user";
import { Layout, Space } from "antd";

const Header = () => {
  /**
   * Styles for the header component.
   *
   * @type {React.CSSProperties}
   * @property {string} backgroundColor - The background color of the header.
   * @property {string} display - The display type of the header, set to flex.
   * @property {string} justifyContent - Aligns children to the end of the header.
   * @property {string} alignItems - Aligns children vertically in the center.
   * @property {string} padding - Horizontal padding inside the header.
   * @property {string} position - Sets the header to be sticky.
   * @property {number} top - Positions the header at the top of the viewport.
   * @property {number} zIndex - Ensures the header is above other elements.
   */
  const headerStyles: React.CSSProperties = {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 24px",
    position: "sticky",
    top: 0,
    zIndex: 999
  };

  /**
   * Header component that renders a sticky header with user information.
   *
   * @component
   * @returns {JSX.Element} The rendered header component.
   *
   * @example
   * return (
   *   <Header />
   * )
   */
  return (
    <Layout.Header style={headerStyles}>
      <Space align="center" size="middle">
        <CurrentUser />
      </Space>
    </Layout.Header>
  );
};

export default Header;
