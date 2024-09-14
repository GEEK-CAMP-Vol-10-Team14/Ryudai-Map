// src/routes/BuildingTwo.js
import './pages.css';
export const BuildingTwo = () =>{
    return (
        <div className='main'>
            <a href=".." >&lt;マップに戻る</a>
            <h1>工学部 2号館</h1>
            <table border="1">
                <tr>
                    <th>緯度経度</th>
                    <th>緯度26度15分09秒750 経度127度45分59秒243</th>
                </tr>
                <tr>
                    <th>Plus Code</th>
                    <th>7QR97Q38+3H</th>
                </tr>
                <tr>
                    <th>what3words</th>
                    <th>&#47;&#47;&#47;まんたん。さいばし。まえうり</th>
                </tr>
            </table>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1722138233759!6m8!1m7!1smhDKjMR8OU0MbepmfMOtCQ!2m2!1d26.25315100758831!2d127.7663927467495!3f176.06115676960653!4f18.558384531426725!5f0.8107752866547404"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Building_looks">
            </iframe>
            <h2>主な施設</h2>
            <h3>一階</h3>
            <p></p>

            <h2>アクセス</h2>
            <p>
                北口から：徒歩約6分<br></br>
                北食堂から：徒歩約2分
            </p>

            <h2>備考</h2>
            <p>
                改修されて新しくなった
            </p>
        </div>
    )
}
