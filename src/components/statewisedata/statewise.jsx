import { useEffect, useState } from "react";

export default function Statewise() {
  const [Value, setvalue] = useState([]);

  const getcovidData = async () => {
    const res = await fetch(
      "	https://script.googleusercontent.com/macros/echo?user_content_key=O4Pg7N6nRFvwz_pY0pbbguuPd9590I8CqiC-FL_x21Gou0BoHWrmeJtAEDpsnjgXiK-E7vTGHG8XY3OvMtrmDL65jKEMrpVDm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIu23UA9MTZUqdyhTl8NKp2nzP3OUQnQnJl-y98upyPGixEGS3DOUahJMSmeAfPffwLn9HiS1Gf_i61fKbPpX1gpGniNeWuDcQ&lib=MS9X2pCblTx-ktugj4XZqOPA5weOe4WuY"
    );

    const actualData = await res.json();
    setvalue(actualData.data);
    // console.log(actualData.data);
  };

  useEffect(() => {
    getcovidData();
  }, []);

  return (
    <>
      <div className="bg-yellow-500">
        <div className="flex p-10 justify-center bg-purple-700">
          <h1>
            <span className="font-bold text-3xl font-serif mr-2">INDIA</span>
            <span className="font-semi text-xl font-serif mr-2">
              COVID-19 Data
            </span>
          </h1>
        </div>

        <div className="flex justify-center ">
          <table className="table-auto z-10 border-solid	">
            <thead>
              <tr className="bg-black text-cyan-50 text-2xl ">
                <th className="border-4 border-amber-600 py-3 border-solid px-2">
                  State
                </th>
                <td className="border-4 border-amber-600 py-3 border-solid px-2">
                  Confirmed
                </td>
                <td className="border-4 border-amber-600 py-3 border-solid px-2">
                  Recovered
                </td>
                <td className="border-4 border-amber-600 py-3 border-solid px-2">
                  Deaths
                </td>
                <td className="border-4 border-amber-600 py-3 border-solid px-2">
                  Active
                </td>
              </tr>
            </thead>
            <tbody>
              {Value.map((currEle, id) => {
                return (
                  <tr key={id} className="text-white bg-red-600">
                    <th className="border-4 border-purple-900 py-3 px-2">
                      {currEle.State}
                    </th>
                    <td className="border-4 border-purple-900 py-3 px-2">
                      {currEle.Confirmed}
                    </td>
                    <td className="border-4 border-purple-900 py-3 px-2">
                      {currEle.Recovered}
                    </td>
                    <td className="border-4 border-purple-900 py-3 px-2">
                      {currEle.Deaths}
                    </td>
                    <td className="border-4 border-purple-900 py-3 px-2">
                      {currEle.Active}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
