import React  from "react";

const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
  return (
    <div>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerDays}</p>
              <small style={{fontSize: '25px'}}>Days</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small style={{fontSize: '25px'}}>Hours</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small style={{fontSize: '25px'}}>Minutes</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small style={{fontSize: '25px'}}>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </div>
  )
}
Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10
}
export default Clock;