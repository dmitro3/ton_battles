import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import GameRoomComponent from './components/GameRoom/GameRoom';
import CreateGame from './components/CreateRoom/CreateRoom';
import Header from './components/Header/Header';
import GameRoomList from './components/GameRoomList/GameRoomList';
import Shop from './components/Shop/Shop';
import TasksList from './components/TasksList/TasksList';
import ReferralPage from './components/ReferralPage/ReferralPage';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game-rooms" element={<GameRoomList />} />
          <Route path="/game-room/:roomId" element={<GameRoomComponent />} />
          <Route path="/create-room" element={<CreateGame />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/tasks" element={<TasksList />} />
          <Route path="/referral" element={<ReferralPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2024 TON Battles
      </footer>
      <ToastContainer />
    </div>
  );
};

export default App;
