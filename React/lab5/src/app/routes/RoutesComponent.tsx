import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AllTasksPage } from "../../pages/AllTasksPage"
import { AddTaskPage } from "../../pages/AddTaskPage"

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllTasksPage />} />
        <Route path="/saved" element={<h1>Saved</h1>} />
        <Route path="/favorites" element={<h1>Favorites</h1>} />
        <Route path="/add-task" element={<AddTaskPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent
