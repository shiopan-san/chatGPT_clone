import SearchBar from '../MainPanel/SearchBar';
import QuickActionButtons from '../MainPanel/QuickActionButtons';

export default function MainContent() {
  return (
    <div className="flex-1 flex flex-col">
      <main className="flex-1 flex flex-col justify-center">
        <h1 className="text-2xl text-center text-white mb-8">
          お手伝いできることはありますか？
        </h1>
        <QuickActionButtons />
      </main>
      <footer className="mb-8">
        <SearchBar />
      </footer>
    </div>
  );
}