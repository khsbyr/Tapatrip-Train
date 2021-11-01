import busSketch from '@public/assets/45.svg';
import Image from 'next/image';
import seatRangeMap from '@helpers/seatRangeMap';
import s from './Seat48_52.module.scss';
interface Props {
  datas?: any;
}
const Seat48_52 = ({ datas }) => {
  const seatRanges = seatRangeMap(datas.seat);
  console.log(datas);
  return (
    <div className="pl-10 flex">
      <div className="z-0 relative w-full">
        <Image src={busSketch} className="z-0" />
      </div>
      <div className="absolute mt-40 ml-7">
        <table>
          {seatRanges.map((seat, i) =>
            seat.length === 4 ? (
              <tr>
                {seat.map((seat, j) =>
                  j !== 2 ? (
                    <td>
                      <button className={s.seatButton} value={j}>
                        {seat && seat.number}
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button className={s.seatButtonMarginLeft} value={j}>
                        {seat && seat.number}
                      </button>
                    </td>
                  )
                )}
              </tr>
            ) : (
              <tr>
                {seat.map((seat, k) =>
                  k == 3 || k == 4 ? (
                    <td>
                      <button
                        className={s.seatButtonMarginRight}
                        value={k}
                        onClick={seat.number}
                      >
                        {seat && seat.number}
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button className={s.seatButton} value={k}>
                        {seat && seat.number}
                      </button>
                    </td>
                  )
                )}
              </tr>
            )
          )}
        </table>
      </div>
    </div>
  );
};
export default Seat48_52;