import React, { Fragment } from 'react';
import { Badge } from 'react-bootstrap';

import { markNonFreeCategory } from '../../helpers';

const NonFreeCategoryBadge = ({ category }) => (
  <>
    {markNonFreeCategory(category) && (
      <Badge pill variant="warning" className="position-absolute mt-n1">
        $
      </Badge>
    )}
  </>
);

export default NonFreeCategoryBadge;
