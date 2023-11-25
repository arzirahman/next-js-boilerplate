import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react'
import Main from '../Main'

describe('Main Component Test', () => {
    it('Render Component', () => {
        render(<Main />)
        const lol = screen.getByText('Main')
        expect(lol).toBeInTheDocument()
    })
})