// src/routes/BuildingKitaShokudou.js
import './pages.css';
export const BuildingKitaShokudou = () =>{
    return (
        <div className='main'>
            <a href=".." >&lt;マップに戻る</a>
            <h1>北食堂</h1>
            <table border="1">
                <tr>
                    <th>緯度経度</th>
                    <th>緯度26度15分06秒334 経度127度45分57秒393</th>
                </tr>
                <tr>
                    <th>Plus Code</th>
                    <th>7QR97Q28+P9</th>
                </tr>
                <tr>
                    <th>what3words</th>
                    <th>///ざっそう。だいすき。ねまき</th>
                </tr>
            </table>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1722142122489!6m8!1m7!1sq8YATxHU4dqU6ZHurqq6NA!2m2!1d26.25195647597008!2d127.765598831813!3f145.19253521413083!4f10.616529905051678!5f0.7820865974627469"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Building_looks">
            </iframe>
            <h2>主な施設</h2>
            <p>
                北ショップ（売店）<br></br>
                北食堂
            </p>

            <h2>アクセス</h2>
            <p>
                北口から：徒歩約7分<br></br>
                北食堂から：徒歩約3分
            </p>

            <h2>備考</h2>
            <h3>北ショップ</h3>
            <p>
            平日 10:00〜17:00<br></br>
            土日祝休日<br></br>
            ※営業時間は2023年10月現在のものです。学事等の理由で変更になる場合があります。
            </p>
            <h3>北食堂</h3>
            <p>
            平日 11:30～13:30<br></br>
            土日祝休日<br></br>
            ※営業時間は2023年10月現在のものです。学事等の理由で変更になる場合があります。
            </p>
            <a href='https://coop.kyushu-bauc.or.jp/ryudai-coop/info01/index.html'>公式サイト</a>
        </div>
    )
}
