import "./App.scss";
import {
	FaInbox,
	FaCalendar,
	FaCalendarAlt,
	FaChevronDown,
} from "react-icons/fa";

import Header from "./components/Header";
// import ListItem from "./components/ListItem";
import Lists from "./components/Lists";
import TodoHeader from "./components/Todo/TodoHeader";
import TodoCreate from "./components/Todo/TodoCreate";
import TodoLists from "./components/Todo/TodoLists";

function App() {
	const generalLists = [
		{
			id: 1,
			text: "Inbox",
			icon: <FaInbox />,
			active: true,
		},
		{
			id: 2,
			text: "Today",
			icon: <FaCalendar />,
			active: false,
		},
		{
			id: 3,
			text: "Next 7 days",
			icon: <FaCalendarAlt />,
			active: false,
		},
	];

	const projectLists = [
		{
			text: "Project-A",
			icon: <FaInbox />,
			active: true,
		},
		{
			text: "Project-B",
			icon: <FaInbox />,
			active: false,
		},
	];

	return (
		<div className="todo">
			<div className="todo__header">
				<Header />
			</div>
			<div className="todo__sidebar">
				<aside className="sidebar">
					<section className="sidebar__category">
						{/* <ul className="list"> */}
						<Lists data={generalLists} />
						{/* <li className="list__item">
								<FaInbox className="list__item__icon" />
								<p className="list__item__text">Inbox</p>
							</li>
							<li className="list__item">
								<FaCalendar className="list__item__icon" />
								<p className="list__item__text">Today</p>
							</li>
							<li className="list__item">
								<FaCalendarAlt className="list__item__icon" />
								<p className="list__item__text">Next 7 days</p>
							</li> */}
						{/* <ListItem
								text="Inbox"
								icon={<FaInbox className="list__item__icon" />}
								active={true}
								/>
								<ListItem
								text="Today"
								icon={
									<FaCalendar className="list__item__icon" />
								}
								active={false}
								/>
								<ListItem
								text="Next 7 days"
								icon={
									<FaCalendarAlt className="list__item__icon" />
								}
								active={false}
							/> */}
						{/* {generalLists.map((item, index) => (
								<ListItem key={index} {...item} />
							))} */}
						{/* {generalLists.map((item) => (
								<ListItem key={item.id} text={item.text} icon={item.icon} active={item.active} />
							) )} */}
						{/* </ul> */}
					</section>
					<section className="sidebar__category">
						<div className="accordion">
							{/* Toggle */}
							<div className="accordion__toggle">
								<li className="accordion__item">
									<FaChevronDown className="accordion__item__icon accordion__item__active" />
									<p className="accordion__item__text">
										Projects
									</p>
								</li>
							</div>
						</div>
						{/* Lists */}
						{/* <ul className="lists"> */}
						<Lists data={projectLists} />
						{/* <ListItem
								text="Project-A"
								icon={<FaInbox className="list__item__icon" />}
								// active={true}
							/>
							<ListItem
								text="Project-B"
								icon={<FaInbox className="list__item__icon" />}
								// active={true}
							/> */}
						{/* {projectLists.map((item, index) => (
								<ListItem key={index} {...item} />
							))} */}
						{/* </ul> */}
					</section>
				</aside>
			</div>
			<div className="todo__content">
				<main className="todo__container">
					{/* Header */}
					<TodoHeader />
					<TodoCreate />
					<TodoLists />
					{/* CreateTo */}

					{/* TodoLists */}
				</main>
			</div>
		</div>
	);
}

export default App;

/*
Challenge : Refactor ให้ 2 section render UI ที่...
	- OptionA (2/5) : render UI ต่างที่ <Lists/> กับ <Accordion />
	- OptionB (4/5) : render UI เดียวกัน เช่น <Lists />
	- OptionC (5/5) : render UI <Lists /> ภายใต้ <Accordion> <Lists /></Accordion>
	/ ใช้ props.children
 */
