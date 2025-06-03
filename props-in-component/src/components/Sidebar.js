function Sidebar() {
    const stylesidebar = {
        
        background: "azure",
        
         width: "calc(30% - 10px)",
            marginLeft: "10px"

    }
    return (
        <aside style={stylesidebar} >
            <h2>Sidebar elements</h2>
        </aside>
        
    );
}

export default Sidebar;