import { toto } from './main'

describe('test main', () => {
    test('un', () => {
        expect(toto()).toEqual(null)
    })
    test('deux', () => {
        //expect(toto(true)).toEqual('tutu')
        toto(true)
    })
})
