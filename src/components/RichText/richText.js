import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';

const RichText = ({ rawText, className }) => {
  if (!rawText.raw && typeof rawText === 'string') {
    return <p className={className}>{rawText}</p>;
  }

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={className}>{children}</p>
      ),
    },
  };

  return renderRichText(rawText, options);
};

export default RichText;
