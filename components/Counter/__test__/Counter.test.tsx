import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react'
import Counter from "../Counter"
import { useSelector } from "react-redux"

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}))

describe('Main Component Test', () => {
    it('Render Component', () => {
        (useSelector as jest.Mock).mockReturnValueOnce(0);
        render(<Counter />)
        const value = screen.getByText('0')
        expect(value).toBeInTheDocument()
    })
})