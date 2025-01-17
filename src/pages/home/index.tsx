import HomeLayout from "../../layouts/home";
import { Navbar } from "../../components/navbar";
import { KanbanBoard } from "./kanban-board";

const Home = () => {
  return (
    <HomeLayout>
      <Navbar />
      <KanbanBoard />
    </HomeLayout>
  );
};

export default Home;
