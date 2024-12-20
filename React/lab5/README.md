# Лабораторна робота 5 6
використав redux toolkit & rtk query замість свого варіанту

найращі практити описав нижче

## запуск 
client - npm run front

server - npm run back

## код
Використання RTK Query
[taskApit](./src/entities/task/api/taskApi.ts)
[deleteTask](./src/features/DeleteCard/ui/DeleteCard.tsx)
[addTaskForm](./src/widgets/AddTask/ui/AddTaskWidget.tsx)


Використання Redux store
[reduxStore](./src/app/store.ts)

## Практики
1. Використання FSD архітектури
2. Використання typescript для типізації
3. Винесення типів в окремі файли
4. Використання припроцесара для стилізації
5. Використання config файлів для навігації
[menuconfig](./src/entities/Menu/config/MenuConfig.ts)
6. Використання react-hook-form для створення форм та yup для їх валідації
7. Всі компоненти абстрактні та можуть бути перевикоритані
8. FSD експорти для інкапсуляції слайсів
9. Вокиристання git