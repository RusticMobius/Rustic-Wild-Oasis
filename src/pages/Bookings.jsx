import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingtabkeOperations from "../features/bookings/BookingTableOperations";
function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingtabkeOperations />
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
