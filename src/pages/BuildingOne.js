// src/routes/BuildingOne.js
import './pages.css';
export const BuildingOne = () =>{
    return (
        <div className='main'>
            <a href=".." >&lt;マップに戻る</a>
            <h1>工学部 １号館</h1>
            <table border="1">
                <tr>
                    <th>緯度経度</th>
                    <th>緯度26度15分11秒913 経度127度45分58秒686</th>
                </tr>
                <tr>
                    <th>Plus Code</th>
                    <th>7QR97Q38+7G</th>
                </tr>
                <tr>
                    <th>what3words</th>
                    <th>&#47;&#47;&#47;こくりつ。きふく。すくう</th>
                </tr>
            </table>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1722136359895!6m8!1m7!1sYt6gJ_dLotDiYr5ztMHfHg!2m2!1d26.25363935499221!2d127.7668919350622!3f229.72689396264522!4f13.244431519857002!5f0.7820865974627469"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Building_looks">
            </iframe>
            <h2>主な施設</h2>
            <h3>一階</h3>
            <p>工学部事務室</p>

            <h2>アクセス</h2>
            <p>
                北口から：徒歩約4分<br></br>
                北食堂から：徒歩約4分
            </p>

            <h2>備考</h2>
            <p>

            </p>
        </div>
    )
}
