import './ct-sidebar.css'

export const Sidebar = () => {
    return (
        <aside className="sidebar-div">

            <div className="sb-option">
                <h3 className="sb-h3">Vista en filas</h3>
                <input type="checkbox" className="sd-switcher" />
            </div>

        </aside>
    )
}