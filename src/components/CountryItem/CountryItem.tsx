import { Color, ICountry } from "../../types";
import { Badge } from "../Badge/Badge";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({
  country: { flag, name, capital, region, area, population },
}: IProps) => {
  return (
    <li className="list-group-item d-flex justify-content-around align-items-center">
      <img src={flag} className="img-fluid" alt="Country flag" />
      <p className="fs-4 text">{name}</p>
      <p className="fs-4 text">{capital}</p>
      <p className="fs-4 text">{region}</p>
      <Badge label={"area"} color={Color.Primary}>
        {area}
      </Badge>
      <Badge label={"population"} color={Color.Secondary}>
        {population}
      </Badge>
    </li>
  );
};
