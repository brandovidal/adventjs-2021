import createXmasTree from "./index"

describe('Day 4 - AdventJS challengue', () => {
    test('is a christmas tree with height of 3', () => {
        expect(createXmasTree(3)).toBe(
            [
                '__*__',
                '_***_',
                '*****',
                '__#__',
                '__#__'
            ].join('\n')
        );
    })

    test('is a christmas tree with height of 5', () => {
        expect(createXmasTree(5)).toBe(
            [
                '____*____',
                '___***___',
                '__*****__',
                '_*******_',
                '*********',
                '____#____',
                '____#____',
            ].join('\n')
        )
    })

})