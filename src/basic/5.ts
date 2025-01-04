// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// const isWeekend = (day: DayOfWeek): boolean => {
//   return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
// };

// console.log(isWeekend(DayOfWeek.Saturday));
// console.log(isWeekend(DayOfWeek.Monday));

// інший варіант

enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

type DayOfWeekStatuses = Record<DayOfWeek, boolean>;

const isWeekend = (): DayOfWeekStatuses => {
    return {
        [DayOfWeek.Monday]: false,
        [DayOfWeek.Tuesday]: false,
        [DayOfWeek.Wednesday]: false,
        [DayOfWeek.Thursday]: false,
        [DayOfWeek.Friday]: false,
        [DayOfWeek.Saturday]: true,
        [DayOfWeek.Sunday]: true,
    };
};

export {};