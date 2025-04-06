---
layout: page
title: About The Digitization Project
permalink: /digitization-project/
---


<a href="{{ '/img/cbc.png' | absolute_url }}">
  <img src="{{ '/img/cbc.png' | absolute_url }}" alt="A view of the exterior of the Centro Bartolome de las Casas in Cusco, Peru"/>
</a>

_Alt: A view of the exterior of Centro Bartolome de las Casas in Cusco, Peru._

### Finding The Newspapers

Funds from the Tinker grant allowed me to travel to the Centro Bartolome de las Casas (CBC) in Cusco and begin the process of digitalizing, transcribing, and translating these works for work on my thesis for Latin American and Caribbean Studies at NYU. The 15 editions available in the archive had clearly been exposed to water and other elements, which were starting to degrade the paper and make the newspapers fragile. The issues were digitized using a setup with a modified tripod, my iPhone, and the Adobe Scan app.

<img src="{{ '/img/setup.png' | absolute_url }}" alt="A photo of the digitization setup, including a table, copies of the newspapers, a tripod, and a laptop showing scans of the issues."/>

_Alt: A photo of the digitization setup, including a table, copies of the newspapers, a tripod, and a laptop showing scans of the issues._

### Transcriptions: hand, automation, and the limits of tech

Cronicawan was published almost entirely in Quechua, a language that remains largely oral and has long been marginalized. Traditional OCR (Optical Character Recognition) tools, typically trained on English or Spanish-language Latin print, were not able to accurately read the Quechua language or interpret the newspaper’s page layouts. 

I used [Transkribus](https://www.transkribus.org/), a platform that utilizes AI language models for automated text recognition, to train a custom AI model specifically tailored to recognizing the text of Cronicawan. This allowed for a higher degree of accuracy than other, preexisting OCR tools. Even with this tool, the transcription process required human intervention. 

**The transcriptions available on this site are a combination of hand transcribed, hand-corrected, and automated text** especially where page damage, stylized text, or unusual spacing made results unreliable. That being said, **automated transcriptions may not be 100% accurate, so please use caution and double-check the text.** Please contact me if you notice transcription errors while browsing. 

<img src="{{ '/img/transkribus.gif' | absolute_url }}" alt="A gif of the Transkribus UI, showing the process of hand-correcting AI-detected text."/>

*Alt: A gif of the Transkribus UI, showing the process of hand-correcting AI-detected text.*

### Translations & Interpretations

Translation presented its own set of challenges with Cronicawan. I have made the **deliberate choice not to translate the Quechua text into English or Spanish beyond the Spanish translations that were included within the newspaper itself**. This decision reflects both the cultural complexity of translating Quechua and the limitations of automated or non-expert translation tools when handling linguistic nuance. **English translations are automated from the provided Spanish translations, so please use caution when browsing.** Visitors are invited to engage with the Quechua texts as they are, unedited with their historical context and linguistic richness intact. 

### Building the Website: Jekyll, Wax, and a view into the Archive

This project is driven by a commitment to making Quechua-language materials more accessible and visible online, while being mindful of the technological and cultural limitations inherent to working with underrepresented languages and archival formats. This edition of Cronicawan, **published 50 years after its initial publication, offers a new way to encounter and study this rare Quechua-language newspaper**. 

Digitizing Cronicawan was built using Jekyll, a static site generator. I used Wax, a framework for Jekyll designed to support image-based collections. Wax enabled me to more easily format individual pages for each issue and transcription with their associated metadata, and implement search functions across the documents. The transcription viewer allows users to view Quechua and Spanish transcriptions alongside scanned images of the original newspaper. 