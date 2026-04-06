import './styles/main.css'
import { renderApp } from './components/App'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderApp()

document.addEventListener('copy', (e) => {
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) {
        if (e.clipboardData) {
            e.clipboardData.setData('text/plain', selection.toString());
            e.preventDefault();
        }
    }
});