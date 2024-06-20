import './Header.css';

export default function Header() {
    return (
        <table className="navigationbar">
            <tr>
                <td className="button-header">
                    <p className="active">About me</p>
                </td>
                <td className="button-header">
                    <p>My skills</p>
                </td>
                <td className="button-header">
                    <p>Library</p>
                </td>
                <td className="button-header">
                    <p>Miniatures</p>
                </td>
                <td className="button-header">
                    <p>Contacts</p>
                </td>
            </tr>
        </table>
    );
}