

export const measurements = {
    namespaced: true,
    state: () => ({
        currentMeasurement: {
          temperature: '',
          id: ''
        },
        measurements: [],
        editMeasurement: {},
        editMeasurementSignal: false
    }),
    mutations: {
        initCurrentMeasurement(state: any) {
            state.currentMeasurement = {
                id: null,
                temperature: state.editMeasurement?.temperature !== ''? state.editMeasurement.temperature : ''
            }
        },
        // Присвоение уникального ID для измерения, в дальнейшем будет использоваться, для отображения даты, чтобы пользователь понимал значение цифр
        updateCurrentMeasurementId(state: any) {
            state.currentMeasurement.id = Date.now()
        },
        clearCurrentMeasurement(state: any) {
            state.currentMeasurement = {
                temperature: ''
            };
        },

        //Добавление нового измерение, ставим в начало массива, что бы новые измерения отображались первыми в массиве
        addMeasurement(state: any) {
            state.measurements.unshift(state.currentMeasurement)
        },
        //Изменение измерения по ID, находим элемент в массиве, находим его индекс и заменяем значение по индексу, сохраняя ID
        updateMeasurements(state: any) {
            const currentEditMeasurement = state.measurements.find((measurement: any) => measurement.id === state.editMeasurement.id)
            currentEditMeasurement.temperature = state.currentMeasurement.temperature
            state.measurements[state.measurements.findIndex((measurement: any) => measurement.id === state.editMeasurement.id)] = currentEditMeasurement
        },
        //Удаление измерения, получаем ID элемента и с помощью метода filter возвращаем новый массив с элементами, у которых id отличаестя от текущего
        removeMeasurement(state: any, measurement: any) {
            state.measurements = state.measurements.filter((p: any) => p.id !== measurement.id)
        },


        //Присваиваем измененное измерение в отдельную переменную
        updateEditMeasurement(state: any, measurement: object) {
            state.editMeasurement = measurement
        },
        //Отчищаем переменную
        clearEditMeasurement(state: any) {
            state.editMeasurement = {}
        },
        //Прокидываем сигнал о том, что в модальном окне будет не добавление нового измерения, а изменение текущего значения
        changeEditMeasurementSignal(state: any, signal: boolean) {
            state.editMeasurementSignal = signal
        },
    },
}
