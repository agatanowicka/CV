import React from 'react';

export default function Text() {
    return (
        <div>
            <div className='techTextDiv'>
                <p className='techParagraph'>Swoje projekty rozwijam z użyciem najnowszych technologii.Uważam, że</p>
                <p className='techParagraphYellow techParagraph'> JavaScript </p>
                <p className='techParagraph'>jest technologią, która umożliwia tworzenie
                fascynujących rzeczy w wirtualnej przestrzeni. Jako jeden z nielicznych
                języków pozwala tworzyć  zaawansowane aplikacje webowe zarówno po stronie
                frontEndu jak i BackEndu. Duża liczba bibliotek npm’a pozwala rozwiązać
                prawie każdy problem. Kolejnym aspektem który zachęcił mnie do nauki
                tego języka jest  asynchroniczność. Jest ona bardzo wydajnym podejściem
                dla aplikacji webowych, jednocześnie ograniczając szereg problemów z
                wielowątkowością.</p>
            </div>
            <div className='techTextDiv'>
                <p className='techParagraph'>Jako frameworka w większości swoich projektów użyłam.</p>
                <p className='techParagraphYellow techParagraph'> Reacta & Redux</p>
                <p className='techParagraph'>, jednakże ostatnio zainteresowałam się Vue.js i  przyszłości
                chciałabym poszerzyć swoją wiedzę również w tym zakresie.</p>
            </div>
            <div className='techTextDiv'>
                <p className='techParagraphYellow techParagraph'> MongoDB wraz z biblioteką Mongoose</p>
                <p className='techParagraph'> jest jednym z czołowych rozwiązań z
                zakresu przechowywania danych, dlatego też nie zabrakło ich w moich
                pierwszych projektach. W swoich aplikacjach dużą wagę przywiązywałam do
                zagadnień bezpieczeństwa. Poświęciłam naprawdę dużo czasu zgłębiając
                ten temat. Jednakże zdaję sobie sprawę ile jeszcze pracy w tym zakresie przede mną.</p>
            </div>
        </div>
    )
}