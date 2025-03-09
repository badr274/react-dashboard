import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqData } from "../data";
import { Box } from "@mui/material";
import Header from "../components/Header";

const FAQ = () => {
  const renderFAQs = faqData.map(({ question, answer }, idx) => {
    return (
      <Box>
        <Accordion key={idx}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel{idx+1}-header`}
            id={`panel{idx+1}-header`}
          >
            <Typography component="span">{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{answer}</AccordionDetails>
        </Accordion>
      </Box>
    );
  });
  return (
    <Box>
      <Header
        title="Frequently Asked Questions (FAQ)"
        description="Find quick answers to common questions about our services and features."
      />
      {renderFAQs}
    </Box>
  );
};
export default FAQ;
