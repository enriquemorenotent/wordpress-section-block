import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks } from "@wordpress/block-editor";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { PanelRow } from "@wordpress/components";
import { NumberControl } from "@wordpress/components";
import { TextControl } from "@wordpress/components";

import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
	const { padding, content } = attributes;
	const parsedPadding = parseInt(padding) || 0;
	const minPadding = 20;
	const finalPadding = parsedPadding < minPadding ? minPadding : parsedPadding;

	const style = {
		paddingTop: finalPadding + "px",
		paddingBottom: finalPadding + "px",
	};

	return (
		<div {...useBlockProps()} style={style}>
			<div>
				<InspectorControls>
					<PanelBody title={__("Settings", "my-block")}>
						<PanelRow>
							<TextControl
								label={__("Padding", "my-block")}
								value={padding}
								onChange={(padding) => setAttributes({ padding })}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<div style={{ width: "1200px", margin: "0 auto" }}>
					<InnerBlocks />
				</div>
			</div>
		</div>
	);
};

export default Edit;
