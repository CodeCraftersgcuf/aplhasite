import React from 'react'

const Select = () => {
    return (
        <select
            id="country"
            name="country"
            className="border border-gray-300 rounded-md w-full select-tag text-sm"
        >
            <option value="united-kingdom" className="text-sm">United Kingdom</option>
            <option value="afghanistan" className="text-sm">Afghanistan</option>
            <option value="albania" className="text-sm">Albania</option>
            <option value="algeria" className="text-sm">Algeria</option>
            <option value="andorra" className="text-sm">Andorra</option>
            <option value="angola" className="text-sm">Angola</option>
            <option value="antigua-barbuda" className="text-sm">Antigua and Barbuda</option>
            <option value="argentina" className="text-sm">Argentina</option>
            <option value="armenia" className="text-sm">Armenia</option>
            <option value="australia" className="text-sm">Australia</option>
            <option value="austria" className="text-sm">Austria</option>
            <option value="azerbaijan" className="text-sm">Azerbaijan</option>
            <option value="bahamas" className="text-sm">Bahamas</option>
            <option value="bahrain" className="text-sm">Bahrain</option>
            <option value="bangladesh" className="text-sm">Bangladesh</option>
            <option value="barbados" className="text-sm">Barbados</option>
            <option value="belarus" className="text-sm">Belarus</option>
            <option value="belgium" className="text-sm">Belgium</option>
            <option value="belize" className="text-sm">Belize</option>
            <option value="benin" className="text-sm">Benin</option>
            <option value="bhutan" className="text-sm">Bhutan</option>
            <option value="bolivia" className="text-sm">Bolivia</option>
            <option value="bosnia-herzegovina" className="text-sm">Bosnia and Herzegovina</option>
            <option value="botswana" className="text-sm">Botswana</option>
            <option value="brazil" className="text-sm">Brazil</option>
            <option value="brunei" className="text-sm">Brunei</option>
            <option value="bulgaria" className="text-sm">Bulgaria</option>
            <option value="burkina-faso" className="text-sm">Burkina Faso</option>
            <option value="burundi" className="text-sm">Burundi</option>
            <option value="cabo-verde" className="text-sm">Cabo Verde</option>
            <option value="cambodia" className="text-sm">Cambodia</option>
            <option value="cameroon" className="text-sm">Cameroon</option>
            <option value="canada" className="text-sm">Canada</option>
            <option value="central-african-republic" className="text-sm">Central African Republic</option>
            <option value="chad" className="text-sm">Chad</option>
            <option value="chile" className="text-sm">Chile</option>
            <option value="china" className="text-sm">China</option>
            <option value="colombia" className="text-sm">Colombia</option>
            <option value="comoros" className="text-sm">Comoros</option>
            <option value="congo-brazzaville" className="text-sm">Congo (Brazzaville)</option>
            <option value="congo-kinshasa" className="text-sm">Congo (Kinshasa)</option>
            <option value="costa-rica" className="text-sm">Costa Rica</option>
            <option value="cote-divoire" className="text-sm">{`Côte d'Ivoire`}</option>
            <option value="croatia" className="text-sm">Croatia</option>
            <option value="cuba" className="text-sm">Cuba</option>
            <option value="cyprus" className="text-sm">Cyprus</option>
            <option value="czechia" className="text-sm">Czechia</option>
            <option value="denmark" className="text-sm">Denmark</option>
            <option value="djibouti" className="text-sm">Djibouti</option>
            <option value="dominica" className="text-sm">Dominica</option>
            <option value="dominican-republic" className="text-sm">Dominican Republic</option>
            <option value="ecuador" className="text-sm">Ecuador</option>
            <option value="egypt" className="text-sm">Egypt</option>
            <option value="el-salvador" className="text-sm">El Salvador</option>
            <option value="equatorial-guinea" className="text-sm">Equatorial Guinea</option>
            <option value="eritrea" className="text-sm">Eritrea</option>
            <option value="estonia" className="text-sm">Estonia</option>
            <option value="eswatini" className="text-sm">Eswatini</option>
            <option value="ethiopia" className="text-sm">Ethiopia</option>
            <option value="fiji" className="text-sm">Fiji</option>
            <option value="finland" className="text-sm">Finland</option>
            <option value="france" className="text-sm">France</option>
            <option value="gabon" className="text-sm">Gabon</option>
            <option value="gambia" className="text-sm">Gambia</option>
            <option value="georgia" className="text-sm">Georgia</option>
            <option value="germany" className="text-sm">Germany</option>
            <option value="ghana" className="text-sm">Ghana</option>
            <option value="greece" className="text-sm">Greece</option>
            <option value="grenada" className="text-sm">Grenada</option>
            <option value="guatemala" className="text-sm">Guatemala</option>
            <option value="guinea" className="text-sm">Guinea</option>
            <option value="guinea-bissau" className="text-sm">Guinea-Bissau</option>
            <option value="guyana" className="text-sm">Guyana</option>
            <option value="haiti" className="text-sm">Haiti</option>
            <option value="honduras" className="text-sm">Honduras</option>
            <option value="hungary" className="text-sm">Hungary</option>
            <option value="iceland" className="text-sm">Iceland</option>
            <option value="india" className="text-sm">India</option>
            <option value="indonesia" className="text-sm">Indonesia</option>
            <option value="iran" className="text-sm">Iran</option>
            <option value="iraq" className="text-sm">Iraq</option>
            <option value="ireland" className="text-sm">Ireland</option>
            <option value="israel" className="text-sm">Israel</option>
            <option value="italy" className="text-sm">Italy</option>
            <option value="jamaica" className="text-sm">Jamaica</option>
            <option value="japan" className="text-sm">Japan</option>
            <option value="jordan" className="text-sm">Jordan</option>
            <option value="kazakhstan" className="text-sm">Kazakhstan</option>
            <option value="kenya" className="text-sm">Kenya</option>
            <option value="kiribati" className="text-sm">Kiribati</option>
            <option value="korea-north" className="text-sm">Korea (North)</option>
            <option value="korea-south" className="text-sm">Korea (South)</option>
            <option value="kosovo" className="text-sm">Kosovo</option>
            <option value="kuwait" className="text-sm">Kuwait</option>
            <option value="kyrgyzstan" className="text-sm">Kyrgyzstan</option>
            <option value="laos" className="text-sm">Laos</option>
            <option value="latvia" className="text-sm">Latvia</option>
            <option value="lebanon" className="text-sm">Lebanon</option>
            <option value="lesotho" className="text-sm">Lesotho</option>
            <option value="liberia" className="text-sm">Liberia</option>
            <option value="libya" className="text-sm">Libya</option>
            <option value="liechtenstein" className="text-sm">Liechtenstein</option>
            <option value="lithuania" className="text-sm">Lithuania</option>
            <option value="luxembourg" className="text-sm">Luxembourg</option>
            <option value="madagascar" className="text-sm">Madagascar</option>
            <option value="malawi" className="text-sm">Malawi</option>
            <option value="malaysia" className="text-sm">Malaysia</option>
            <option value="maldives" className="text-sm">Maldives</option>
            <option value="mali" className="text-sm">Mali</option>
            <option value="malta" className="text-sm">Malta</option>
            <option value="marshall-islands" className="text-sm">Marshall Islands</option>
            <option value="mauritania" className="text-sm">Mauritania</option>
            <option value="mauritius" className="text-sm">Mauritius</option>
            <option value="mexico" className="text-sm">Mexico</option>
            <option value="micronesia" className="text-sm">Micronesia</option>
            <option value="moldova" className="text-sm">Moldova</option>
            <option value="monaco" className="text-sm">Monaco</option>
            <option value="mongolia" className="text-sm">Mongolia</option>
            <option value="montenegro" className="text-sm">Montenegro</option>
            <option value="morocco" className="text-sm">Morocco</option>
            <option value="mozambique" className="text-sm">Mozambique</option>
            <option value="myanmar" className="text-sm">Myanmar</option>
            <option value="namibia" className="text-sm">Namibia</option>
            <option value="nauru" className="text-sm">Nauru</option>
            <option value="nepal" className="text-sm">Nepal</option>
            <option value="netherlands" className="text-sm">Netherlands</option>
            <option value="new-zealand" className="text-sm">New Zealand</option>
            <option value="nicaragua" className="text-sm">Nicaragua</option>
            <option value="niger" className="text-sm">Niger</option>
            <option value="nigeria" className="text-sm">Nigeria</option>
            <option value="north-macedonia" className="text-sm">North Macedonia</option>
            <option value="norway" className="text-sm">Norway</option>
            <option value="oman" className="text-sm">Oman</option>
            <option value="pakistan" className="text-sm">Pakistan</option>
            <option value="palau" className="text-sm">Palau</option>
            <option value="panama" className="text-sm">Panama</option>
            <option value="papua-new-guinea" className="text-sm">Papua New Guinea</option>
            <option value="paraguay" className="text-sm">Paraguay</option>
            <option value="peru" className="text-sm">Peru</option>
            <option value="philippines" className="text-sm">Philippines</option>
            <option value="poland" className="text-sm">Poland</option>
            <option value="portugal" className="text-sm">Portugal</option>
            <option value="qatar" className="text-sm">Qatar</option>
            <option value="romania" className="text-sm">Romania</option>
            <option value="russia" className="text-sm">Russia</option>
            <option value="rwanda" className="text-sm">Rwanda</option>
            <option value="saint-kitts-and-nevis" className="text-sm">Saint Kitts and Nevis</option>
            <option value="saint-lucia" className="text-sm">Saint Lucia</option>
            <option value="saint-vincent-and-the-grenadines" className="text-sm">Saint Vincent and the Grenadines</option>
            <option value="samoa" className="text-sm">Samoa</option>
            <option value="san-marino" className="text-sm">San Marino</option>
            <option value="sao-tome-and-principe" className="text-sm">Sao Tome and Principe</option>
            <option value="saudi-arabia" className="text-sm">Saudi Arabia</option>
            <option value="senegal" className="text-sm">Senegal</option>
            <option value="serbia" className="text-sm">Serbia</option>
            <option value="seychelles" className="text-sm">Seychelles</option>
            <option value="sierra-leone" className="text-sm">Sierra Leone</option>
            <option value="singapore" className="text-sm">Singapore</option>
            <option value="slovakia" className="text-sm">Slovakia</option>
            <option value="slovenia" className="text-sm">Slovenia</option>
            <option value="solomon-islands" className="text-sm">Solomon Islands</option>
            <option value="somalia" className="text-sm">Somalia</option>
            <option value="south-africa" className="text-sm">South Africa</option>
            <option value="south-sudan" className="text-sm">South Sudan</option>
            <option value="spain" className="text-sm">Spain</option>
            <option value="sri-lanka" className="text-sm">Sri Lanka</option>
            <option value="sudan" className="text-sm">Sudan</option>
            <option value="suriname" className="text-sm">Suriname</option>
            <option value="sweden" className="text-sm">Sweden</option>
            <option value="switzerland" className="text-sm">Switzerland</option>
            <option value="syria" className="text-sm">Syria</option>
            <option value="taiwan" className="text-sm">Taiwan</option>
            <option value="tajikistan" className="text-sm">Tajikistan</option>
            <option value="tanzania" className="text-sm">Tanzania</option>
            <option value="thailand" className="text-sm">Thailand</option>
            <option value="timor-leste" className="text-sm">Timor-Leste</option>
            <option value="togo" className="text-sm">Togo</option>
            <option value="tonga" className="text-sm">Tonga</option>
            <option value="trinidad-and-tobago" className="text-sm">Trinidad and Tobago</option>
            <option value="tunisia" className="text-sm">Tunisia</option>
            <option value="turkey" className="text-sm">Turkey</option>
            <option value="turkmenistan" className="text-sm">Turkmenistan</option>
            <option value="tuvalu" className="text-sm">Tuvalu</option>
            <option value="uganda" className="text-sm">Uganda</option>
            <option value="ukraine" className="text-sm">Ukraine</option>
            <option value="united-arab-emirates" className="text-sm">United Arab Emirates</option>
            <option value="united-states" className="text-sm">United States</option>
            <option value="uruguay" className="text-sm">Uruguay</option>
            <option value="uzbekistan" className="text-sm">Uzbekistan</option>
            <option value="vanuatu" className="text-sm">Vanuatu</option>
            <option value="vatican-city" className="text-sm">Vatican City</option>
            <option value="venezuela" className="text-sm">Venezuela</option>
            <option value="vietnam" className="text-sm">Vietnam</option>
            <option value="yemen" className="text-sm">Yemen</option>
            <option value="zambia" className="text-sm">Zambia</option>
            <option value="zimbabwe" className="text-sm">Zimbabwe</option>
        </select>

    )
}

export default Select
