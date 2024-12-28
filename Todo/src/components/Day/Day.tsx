import "./Day.css"
const Day= () => {
    const getCurrentDate = (): { day: string; date: string } => {
        const now = new Date();
        const day = now.toLocaleDateString('en-US', { weekday: 'long' }); 
        const date = now.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }); // "11 Apr"

        return { day, date };
    };

    const { day, date } = getCurrentDate();

    return (
        <div className="day-date" >
            <b>{day}</b>, {date}
        </div>
    );
};

export default Day;
