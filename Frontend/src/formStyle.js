export const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  card: {
    maxWidth: 30 + "%",
    minWidth: 300+'px',
    padding: 20,
    textAlign: "center"
  },
  cardGrid: {
    display: "inline-flex",
    justifyContent: "center",
    marginTop: 50
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 90 + "%"
  },
  dense: {
    marginTop: 19
  },
  media: {
    display: "inline-flex",
    justifyContent: "center",
    width: 80 + "%",
    objectFit: "cover"
  }
});
