import SidebarMenu from '../Sidebar/SidebarMenu';
import MainContent from './MainContent';

export default function AppContainer() {
  return (
    <div className="flex h-screen bg-[#343541]">
      <SidebarMenu />
      <MainContent />
    </div>
  );
}