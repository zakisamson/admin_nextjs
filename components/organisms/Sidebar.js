import SidebarButton from '../atoms/SidebarButton'
import Profile from '../molecules/Profile'

export default function Sidebar(){
    return(
        <div className="sidebar-ctn">
            <p className="font-bold" style={{margin:0, padding:'5px'}}>Admin Panel</p>
            <h2 className="font-bold" style={{margin:0}}>Peduli Digital</h2>
            <Profile />
            <SidebarButton imgsource="/dashboard_icon.png" text="Dashboard" />
            <SidebarButton imgsource="/product_icon.png" text="Products" />
            <SidebarButton imgsource="/selling_icon.png" text="Selling" />
            <SidebarButton imgsource="/payment_icon.png" text="Payment" />
            <SidebarButton imgsource="/upcoming_icon.png" text="Upcoming" />
            <SidebarButton imgsource="/logout_icon.png" text="Logout" />
        </div>
    );
}