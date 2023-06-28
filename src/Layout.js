import MiniDrawer from "./Drawer";

const PageLayout = ({children}) => {
    
    return (
        <>
            <MiniDrawer/>
            {children}
        </>
    )
}

export default PageLayout;