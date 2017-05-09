package ac.simons.bootiful_databases;

import java.util.Map;
import org.jooq.Record;
import org.jooq.RecordMapper;
import org.jooq.RecordMapperProvider;
import org.jooq.RecordType;
import org.jooq.conf.RenderKeywordStyle;
import org.jooq.conf.RenderNameStyle;
import org.jooq.conf.Settings;
import org.jooq.impl.DefaultConfiguration;
import org.jooq.impl.DefaultRecordMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.ResolvableType;

@Configuration
public class JooqConfig {

    @Bean
    public Settings settings(
            @Value("${jooq.renderFormatted:false}") final boolean renderFormatted
    ) {
        return new DefaultConfiguration().settings()
                .withRenderNameStyle(RenderNameStyle.LOWER)
                .withRenderKeywordStyle(RenderKeywordStyle.UPPER)
                .withRenderFormatted(renderFormatted);
    }

    @Bean
    public RecordMapperProvider recordMapperProvider(
            final Map<String, RecordMapper> recordMappers
    ) {
        return new RecordMapperProvider() {
            @Override
            public <R extends Record, E> RecordMapper<R, E> provide(final RecordType<R> recordType, final Class<? extends E> type) {
                return recordMappers
                        .values().stream()
                        .filter(rm -> {
                            final ResolvableType resolvableMapperType = ResolvableType.forClass(rm.getClass()).as(RecordMapper.class);
                            return resolvableMapperType.resolveGeneric(1).isAssignableFrom(type);
                        })
                        .findFirst()
                        .orElseGet(() -> new DefaultRecordMapper<>(recordType, type));
            }
        };
    }
}
