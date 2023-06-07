"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

export const SidebarPanel = ({ children }) => <>{children}</>;
export const MainPanel = ({ children }) => <>{children}</>;

const mobileSize = 600

export function SidebarContainer({
  collapsed = false,
  onCollapsed = () => { },
  children = [],
  className = "",
}) {

  const CollapseButton = ({ collapsed, toggleCollapse }) => (
    <i
      onClick={toggleCollapse}
      className={classNames("bi set-absolute", collapsed ? " bi-caret-right-fill" : " bi-caret-left-fill")}
      style={{
        position: "absolute",
        left: "-10px",
        background: "transparent",
        border: "none",
        outline: "none",
        color: "rgb(0, 126, 167)",
        cursor: "pointer",
        fontSize: "20px",
      }}
      data-toggle="tooltip"
      title={collapsed ? "Show Configuration Panel" : "Hide Configuration Panel"}
    />
  );

  // find children for sidebar and main panel
  let sidebarPanel = children.find((c) => c.type === SidebarPanel);
  let mainPanel = children.find((c) => c.type === MainPanel);

  // determine css classes for panel containers
  let sidebarPanelClass = sidebarPanel.props.className || "col-xl-3";
  let mainPanelClass = mainPanel.props.className || "col-xl-9";

  // assign collapsed prop to internal _collapsed state
  let [_collapsed, _setCollapsed] = useState(collapsed || false);
  useEffect(() => _setCollapsed(collapsed), [collapsed]);

  // notify callback when collapsed
  function toggleCollapse() {
    let collapsed = !_collapsed;
    _setCollapsed(collapsed);
    onCollapsed(collapsed);
  }

  return (
    <div data-testid="SidebarContainer" className={`row ${className}`}>
      <div data-testid="SidebarPanel" className={_collapsed ? "d-none" : sidebarPanelClass}>
        {sidebarPanel}
      </div>

      <div
        data-testid="MainPanel"
        className={`
                position-relative
                ${_collapsed ? "col-md" : mainPanelClass}
            `}>
        {CollapseButton({
          collapsed: _collapsed,
          toggleCollapse: toggleCollapse,
        })}
        {mainPanel}
      </div>
    </div>
  );
}